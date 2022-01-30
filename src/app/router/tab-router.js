import React, { useMemo, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTES } from '~/constants';
import { Notification, Feedback, Dashboard, Payment, Utils } from '~/app/screens';
import TabsUI from '~/app/components/Navigator';
import { Box } from '~/theme';

const Tabs = createBottomTabNavigator();

function Routes() {
	const navigation = useRef();

	const tabs = useMemo(
		() => [
			{
				name: 'Thông báo',
				action: () =>
					navigation.current?.navigate(ROUTES.NOTIFICATION, { route: ROUTES.NOTIFICATION }),
			},
			{
				name: 'Phản hồi',
				action: () =>
					navigation.current?.navigate(ROUTES.FEEDBACK, { route: ROUTES.FEEDBACK }),
			},
			{
				name: 'Trang chủ',
				action: () =>
					navigation.current?.navigate(ROUTES.DASHBOARD, { route: ROUTES.DASHBOARD }),
			},
			{
				name: 'Thanh toán',
				action: () =>
					navigation.current?.navigate(ROUTES.PAYMENT, { route: ROUTES.PAYMENT }),
			},
			{
				name: 'Tiện ích',
				action: () =>
					navigation.current?.navigate(ROUTES.UTILS, { route: ROUTES.UTILS }),
			},
		],
		[],
	);

	return (
		<Box flex={1} justifyContent="center" alignItems="center">
			<NavigationContainer ref={navigation}>
				<Tabs.Navigator
					initialRouteName={ROUTES.DASHBOARD}
					tabBar={(props) => <TabsUI {...{ tabs, ...props }} />}>
					<Tabs.Screen name={ROUTES.NOTIFICATION} component={Notification} />
					<Tabs.Screen name={ROUTES.FEEDBACK} component={Feedback} />
					<Tabs.Screen name={ROUTES.DASHBOARD} component={Dashboard} />
					<Tabs.Screen name={ROUTES.PAYMENT} component={Payment} />
					<Tabs.Screen name={ROUTES.UTILS} component={Utils} />
				</Tabs.Navigator>
			</NavigationContainer>
		</Box>
	);
}
export default Routes;
