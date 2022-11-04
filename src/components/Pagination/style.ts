import styled, { css } from 'styled-components'

export const PaginationContainer = styled.ul`
  display: flex;
  list-style-type: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 0;
  gap: 0.5rem;
`

interface IPaginationItemProps {
  selected?: boolean
  dots?: boolean
  disabled?: boolean
  isArrowIcon?: boolean
}

export const PaginationItem = styled.li<IPaginationItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0 12px;
  color: ${(props) => props.theme['gray-100']};
  align-items: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 140%;
  background-color: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  -webkit-touch-callout: none; /* iPhone OS, Safari */
  -webkit-user-select: none; /* Chrome, Safari 3 */
  -khtml-user-select: none; /* Safari 2 */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none;
  cursor: pointer;

  ${(props) =>
    props.selected &&
    css`
      background-color: ${(props) => props.theme['green-700']};
    `}

  ${(props) =>
    props.dots &&
    css`
      ::hover {
        background-color: transparent;
        cursor: default;
      }
    `}
  
    ${(props) =>
    props.isArrowIcon &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme['green-500']};
    `}

  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      color: ${(props) => props.theme['gray-600']};

      :hover {
        background-color: transparent;
        cursor: default;
      }
    `}
`
