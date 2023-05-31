import './global.css'
import logoToDo from './assets/logo.svg'
import { Circle, PlusCircle, Trash } from '@phosphor-icons/react';

export function App(){
  return (
    <>
    <header className='headerToDo'>
      <img src={logoToDo} alt="logo to-do" />
    </header>

    <div className='addTask'>
      <input type="text" placeholder='Adicione uma nova tarefa'/>
      <button 
        className='create'>
        Criar 
        <PlusCircle fontSize={20} />
      </button>
    </div>

    <div className='task'>

      <div className='countTaskList'>
        <span>Tarefas Criadas</span>
        {/* <p>{count}</p> */}
      </div>

      <div className='countCompletedTask'>
        <span>Concluídas</span>
        {/* <p>{countConcluidas}</p> */}
      </div>

      <div className='taskList'>
        <Circle />
        <textarea />
        <Trash />
      </div>


    </div>




    </>
  );
}