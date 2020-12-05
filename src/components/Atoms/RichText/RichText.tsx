import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

interface IInnerProps {
  align: 'left' | 'center' | 'right'
}

interface IRichTextProps extends IInnerProps {
  markup: string
}

const Inner = styled.div<IInnerProps>`
  text-align: ${(props) => props.align};
`

const RichText = ({
  align,
  markup = '',
  ...rest
}: IRichTextProps) => {
  return (
    <Inner align={align} dangerouslySetInnerHTML={{ __html: markup }} {...rest} />
  )
}

RichText.propTypes = {
  /** Align text */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  /** Text markup */
  markup: PropTypes.string.isRequired
}

RichText.defaultProps = {
  align: 'left'
}

export default RichText
