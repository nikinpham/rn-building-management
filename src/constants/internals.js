import PropTypes from 'prop-types';
export const ROUTES = {
	NOTIFICATION: 'Thông báo',
	FEEDBACK: 'Phản hồi',
	DASHBOARD: 'Trang chủ',
	PAYMENT: 'Thanh toán',
	UTILS: 'Tiện ích',
};

export const NAVIGATION_TAB_PROP_TYPE = PropTypes.arrayOf(
	PropTypes.shape({
		name: PropTypes.oneOf(['Thông báo', 'Phản hồi', 'Trang chủ', 'Thanh toán', 'Tiện ích']),
		action: PropTypes.func,
	}),
);
