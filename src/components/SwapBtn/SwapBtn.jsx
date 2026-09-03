import styles from './SwapBtn.module.scss'

function SwapBtn({src, alt, onClick}) {
  return (
    <>
        <button className={`${styles.swapBtn}`} onClick={onClick}>
            <img src={src} alt={alt} />
        </button>
    </>
  )
}

export default SwapBtn