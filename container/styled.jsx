import styled, { css } from 'styled-components'

export const Container = styled.div`


    `

export const Section = styled.section`
    padding: 30px;
    max-width:${({ maxWidth }) => maxWidth || '90rem'};
    margin: 0 auto;

    `



export const Content = styled.div`
    display: grid;
    grid-column-gap: 1em;
    gap: 1em;
    margin: 50px 0px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    @media (max-width: 900px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
    }
    
`

export const Text = styled.span`
    font-weight: ${({ bold }) => bold || 'initial'};
    font-size: ${({ size }) => size || '12px'};
    text-align:  ${({ align }) => align || 'start'};
    margin: ${({ margin }) => margin || 'auto'};
    justify-content: ${({ justify }) => justify || 'flex-start'};
    display: ${({ display }) => display || 'flex'};
    font-family: ${({ font }) => font || 'PFont-Regular'};
    ${({ lineHeight }) => lineHeight && css`line-height: ${lineHeight};`}
    word-break: break-word;
    max-width: ${({ width }) => width || '100%'};
    width: ${({ width }) => width || '100%'};
    text-overflow: ellipsis;
    color: ${({ color }) => color};

`


export const Card = styled.div`
    display: ${({ display }) => display || 'flex'};
    flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
    justify-content: ${({ justify }) => justify || 'space-between'};
    flex-wrap: ${({ wrap }) => wrap || 'wrap'};
    margin: ${({ margin }) => margin || '30px 0px 0px 0px'};
    border: ${({ border }) => border || 'none'};
    padding: ${({ padding }) => padding || '0'};
    background-color: ${({ bgColor }) => bgColor };
    min-width:${({ minWidth }) => minWidth || 'auto'};
    max-width:${({ maxWidth }) => maxWidth || 'auto'};
    min-height:${({ minHeight }) => minHeight || 'auto'};
    height:${({ height }) => height || 'auto'};
    ${({ shadow }) => shadow && css`box-shadow: ${shadow};`}
    ${({ alignContent }) => alignContent && css`align-content: ${alignContent};`}
    ${({ radius }) => radius && css`border-radius: ${radius};`}
    /* flex-flow: column; */
    width:${({ width }) => width || 'auto'};
    ${({ media }) => media && css`
        @media (max-width: 900px) {
            width: 47%;
            
        }
    
    ;`}
`
