import React from 'react'
import 'jest-styled-components'

import renderWithTheme from '../../../hoc/shallow-with-theme'
import Text from './Text'

it('Atoms/Text component - renders xl yellow paragraph correctly', () => {
  const tree = renderWithTheme(
    <Text tag="p" size="xl" color="yellow">
      My paragraph xl and yellow
    </Text>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Atoms/Text component - renders with Anton font correctly', () => {
  const component = renderWithTheme(
    <Text tag="p" size="xl" family="Anton">
      My paragraph xl and font Anton
    </Text>
  ).toJSON()
  expect(component).toMatchSnapshot()
})

it('Atoms/Text component - render with props and text', () => {
  const props = {
    type: 'p',
    size: 'xl',
    family: 'Anton',
    weight: 'normal',
    color: 'inherit',
    text: 'My paragraph xl and font Anton'
  }

  const component: any = renderWithTheme(
    <Text tag={props.type} size={props.size} family={props.family}>
      {props.text}
    </Text>
  ).toJSON()

  expect(component?.props?.size).toBe(props.size)
  expect(component?.props?.family).toBe(props.family)
  expect(component?.props?.weight).toBe(props.weight)
  expect(component?.props?.color).toBe(props.color)
  expect(component?.children?.[0]).toBe(props.text)
})