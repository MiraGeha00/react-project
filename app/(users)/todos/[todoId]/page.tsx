import React from 'react';
import { Todo } from '../../../typings';
import { notFound } from 'next/navigation';

export const dynamicParams = true;

type PageProps = {
    params: {
        todoId: String
    }
}

const fetchTodo = async (todoId: string) => {  
     const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`, { next: { revalidate: 60}}
     );
     const todo: Todo = await res.json();
     return todo;
};

export default async function  TodoPage({params: {todoId}}: PageProps) {
  const todo = await fetchTodo (todoId);
  if (!todo.id) return notFound(); 


  return (


    <div className='p-10 bg-yellow-200 border-2 m-2 shadow-lg'>
       <p>
        #{todo.id}:{todo.title}
       </p>
       <p>
        Completed: {todo.Completed ? "yes" : "no"}
       </p>
       <p className='border-t border-black mt-5 text-right'>
         By User: {todo.UserId}
       </p>
    </div>
  )
}


export async function generationStaticParams () {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, { next: { revalidate: 60}});
    const todos: Todo[] = await res.json();
    

    const trimmedTodos = todos.splice(0,10);


    return todos.map((todo) =>({
        todoId: todo.id.toString(),
    }))

};