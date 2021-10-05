import { FormEvent, useState, useContext } from 'react';

import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeSvg from '../../assets/income.svg';
import outcomeSvg from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { api } from '../../services/api';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface newTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({  isOpen, onRequestClose}: newTransactionModalProps){

  const { createTransaction } = useTransactions();

  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    
      await createTransaction({
        amount,
        category,
        title,
        type
      });

      setAmount(0);
      setCategory('');
      setTitle('');
      setType('deposit');
      onRequestClose();
  };

  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button 
          type="button" 
          onClick={onRequestClose} 
          className="react-modal-close" 
        >
          <img src={closeImg} alt="fechar modal" />
        </button>
        <Container onSubmit={handleCreateNewTransaction} >
          <h2>Cadastrar Transação </h2>
          <input 
            placeholder="Título" 
            value={title}
            onChange={event => setTitle(event.target.value)}    
          />
          <input 
            type="number" 
            placeholder="Valor" 
            value={amount}
            onChange={event => setAmount(Number(event.target.value))}          
          />
          
          <TransactionTypeContainer>
            <RadioBox
              type="button"
              onClick={() => setType("deposit")}
              isActive={type == "deposit"}
              activeColor="green"
            >
              <img src={incomeSvg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox
              type="button"
              onClick={() => setType("withdraw")}
              isActive={type == "withdraw"}
              activeColor="red"
            >
              <img src={outcomeSvg} alt="Saida" />
              <span>Saida</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input 
            placeholder="Categoria" 
            value={category}
            onChange={event => setCategory(event.target.value)}    
          />
          <button type="submit" >Cadastrar</button>
        </Container>
      </Modal>
  );
};