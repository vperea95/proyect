import React from 'react'
import { Section, Card, Content, Text} from './styled'

export const Hero = () => {
  return (
          <Section>
              <Content >
                  <Card justify='flex-start' width='100%' bgColor='red' >
                      <Text size='1rem' >INTUIT QUICKBOOKS CUSTOMER SUPPORT</Text>
                      <Text lineHeight={'1.25'} font='PFont-Bold' bold='bold' justify='start' size='2.90rem' margin='30px auto'>Contact us</Text>
                      <Card width='50%'>
                      </Card>
                  </Card>
                  <Card justify='flex-end' width='100%'>
                    
                </Card>
              </Content>
          </Section>
  )
}


