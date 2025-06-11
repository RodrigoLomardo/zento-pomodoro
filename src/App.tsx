import {  TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';
import './styles/global.css';
import './styles/theme.css';

export function App() {


    return (
        <>
            <Heading>Olá Mundo 1

                <button>
                    <TimerIcon />
                </button>


            </Heading>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatem corrupti quo itaque rem, in quam dignissimos iste? Ullam quae minus non eum. Cupiditate aspernatur nisi vitae dolore laboriosam? Tempora!</p>
        </>
    )

}

