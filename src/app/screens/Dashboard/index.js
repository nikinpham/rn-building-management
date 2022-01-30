import React from 'react';
import Container from '~/app/containers';
import { Text } from '~/theme';

export default class Dashboard extends React.Component {
	render() {
		return (
			<Container>
				<Text variant="text">Trang chủ</Text>
			</Container >
		)
	}
};