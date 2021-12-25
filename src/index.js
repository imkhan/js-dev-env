import './index.css'
import numeral from 'numeral'

debugger

const value = numeral(10000).format('$0,0.00')
console.log('10000 after formating : '+ value)