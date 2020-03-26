import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: ${props => props.width}px;
  margin: 0 auto;
  main {
    background: ${props => props.theme.palette.primary.main};
    color: ${props => props.theme.palette.primary.text};
    width: 100%;
    height: 100%;
    display: table;

    div {
      display: table-cell;
      text-align: center;
      vertical-align: middle;
    }
  }

  .label {
    display: block;
    text-align: right;
    font-size: 10px;
  }
`

export function LabelBox(props) {
  const { children, labelText, ...others } = props
  return (
    <Container {...others}>
      <div className="label">{labelText}</div>
      <main>{children}</main>
    </Container>
  )
}