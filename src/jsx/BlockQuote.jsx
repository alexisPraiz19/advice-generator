import '../css/general.css';
import RequestAdvice from './RequestAdvice';

function BlockQuote() {
  return (
    <div className='container'>
        <h5 className='advice-number'>advice #117</h5>

        <blockquote className='blockquote'>
            <q className='quote'>
                It is easy to sit up and take
                notice, what's difficult is getting
                up and taking action.
            </q>
        </blockquote>

        <div className='divider'></div>

        <RequestAdvice/>
    </div>
  )
}

export default BlockQuote;