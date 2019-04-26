
import { storiesOf } from '@storybook/vue'
import PnTitleImage from './PnTitleImage'

storiesOf('Image', module)
	.add('as a component', () => ({
		template: '<PnTitleImage :height="300px"/>'
	}))