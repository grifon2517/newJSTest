/* eslint-disable react/prop-types */
// import ReactLogo from './assets/react.svg?react';
// import viteLogo from '/vite.svg';
import { useEffect, useState } from 'react';
import styles from './app.module.css';
import {
	Route,
	Routes,
	NavLink,
	Outlet,
	useParams,
	useNavigate,
	replace,
	Navigate,
} from 'react-router-dom';
// import PropTypes from 'prop-types';

const database = {
	productList: [
		{ id: 1, name: 'Компик' },
		{ id: 2, name: 'Плойка' },
		{ id: 3, name: 'Ящик' },
	],
	products: {
		1: { id: 1, name: 'Компик', price: 1500, amount: 7 },
		2: { id: 2, name: 'Плойка', price: 500, amount: 5 },
		3: { id: 3, name: 'Ящик', price: 400, amount: 10 },
	},
};

const LOADING_TIMEOUT = 3000;

const fetchProductList = () => database.productList;
const fetchProduct = (id) =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve(database.products[id]);
		}, 2500);
	});

const MainPage = () => <div>Контент главной страницы</div>;
const Catalog = () => (
	<div>
		<h3>Каталог товаров</h3>
		<ul>
			{fetchProductList().map(({ id, name }) => (
				<li key={id}>
					<NavLink to={`product/${id}`}>{name}</NavLink>
				</li>
			))}
		</ul>
		<Outlet />
	</div>
);
const Contacts = () => <div>Контент контактов</div>;
const ProductNotFound = () => <div>Такой товар не существует</div>;
const ProductLoadError = () => <div>Ошибка загрузки товара, попробуйте еще раз позднее</div>;
const Product = () => {
	const [product, setProduct] = useState(null);
	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		let isLoadingTimeout = false;
		let isProductLoaded = false;

		setTimeout(() => {
			isLoadingTimeout = true;

			if (!isProductLoaded) {
				navigate('/product-load-error', { replace: true }); // - здесь реплейс убирает шаг из истоии браузера
			}
		}, LOADING_TIMEOUT);
		fetchProduct(params.id).then((loadedProduct) => {
			isProductLoaded = true;

			if (!isLoadingTimeout) {
				if (!loadedProduct) {
					navigate('/product-not-exist');
					return;
				}
				setProduct(loadedProduct);
			}
		});
	}, [navigate, params.id]);
	if (!product) {
		return null;
	}
	const { name, price, amount } = product;
	return (
		<div>
			<h3>Товар - {name}</h3>
			<div>Цена: {price}</div>
			<div>В наличии - {amount}</div>
		</div>
	);
};

const NotFound = () => <div>Такая страница не существует</div>;

const ExtendedLink = ({ to, children }) => (
	<NavLink to={to}>
		{({ isActive }) =>
			isActive ? (
				<>
					<span>{children}</span>
					<span>*</span>
				</>
			) : (
				<span>{children}</span>
			)
		}
	</NavLink>
);

export const App = () => {
	return (
		<div className={styles.App}>
			<div>
				<h3>Меню</h3>
				<ul>
					<li>
						<ExtendedLink to="/">Главная</ExtendedLink>
					</li>
					<li>
						<ExtendedLink to="/catalog">Каталог </ExtendedLink>
					</li>
					<li>
						<ExtendedLink to="/contacts">Контакты </ExtendedLink>
					</li>
				</ul>
			</div>

			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/catalog" element={<Catalog />}>
					<Route path="product/:id" element={<Product />} />
					<Route path="service/:id" element={<Product />} />
				</Route>

				<Route path="/contacts" element={<Contacts />} />
				<Route path="/product-load-error" element={<ProductLoadError />} />
				<Route path="/product-not-exist" element={<ProductNotFound />} />
				<Route path="/404" element={<NotFound />} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Routes>
		</div>
	);
};

// App.protoTypes = {
// 	to: PropTypes.string.isRequired,
// 	children: PropTypes.string.isRequired,
// };
