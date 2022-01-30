import React from 'react';
import Container from '~/app/containers';
import { Text } from '~/theme';

export default class Feedback extends React.Component {
	render() {
		return (
			<Container>
				<Text variant="text">Phản hồi</Text>
			</Container>
		)
	}
};