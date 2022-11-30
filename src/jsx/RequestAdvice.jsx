import '../css/requestAdvice.css';

function RequestAdvice() {
    const request = async() => {
        const request  = await fetch('https://api.adviceslip.com/advice');
        const response = await request.json();
        const slip = response.slip;

        document.querySelector('.advice-number').textContent = `advice #${slip.id}`;
        document.querySelector('.quote').textContent = slip.advice;

        const icon = document.querySelector('.icon-dice');
        icon.style = 'transition transform 1s ease; transform: rotate(360deg)';

        setTimeout(()=>{ icon.style = 'transition: none; transform: rotate(0);'; }, 1000);
    }

  return (
    <button className='btn-request_advice' onClick={request}>
        <img src="src/assets/images/icon-dice.svg" alt="icon-dice" className='icon-dice'/>
    </button>
  )
}

export default RequestAdvice;