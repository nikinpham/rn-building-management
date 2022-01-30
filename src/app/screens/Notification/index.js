import React from 'react';
import Container from '~/app/containers';
import { Text } from '~/theme';

export default class Notification extends React.Component {
	render() {
		return (
			<Container>
				<Text variant="text">Thông báo</Text>
			</Container>
		)
	}
};