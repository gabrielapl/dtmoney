import { useEffect } from 'react';
import { api } from '../../services/api';

import { Container } from './styles';

export function TransactionTable(){

  useEffect(() => {
    api.get('/transactions')
    .then(data => console.log(data));
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolver Site</td>
            <td className="withdraw" >R$12000</td>
            <td>Desenvolvimento</td>
            <td>19/04/2002</td>
          </tr>
          <tr>
            <td>Desenvolver Site</td>
            <td className="deposit" >R$12000</td>
            <td>Desenvolvimento</td>
            <td>19/04/2002</td>
          </tr>
          <tr>
            <td>Desenvolver Site</td>
            <td>R$12000</td>
            <td>Desenvolvimento</td>
            <td>19/04/2002</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};