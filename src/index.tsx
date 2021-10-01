import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance website",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date()
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (scheme, request) => {
      const data = JSON.parse(request.requestBody);
      
      return scheme.create("transaction", data);
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
