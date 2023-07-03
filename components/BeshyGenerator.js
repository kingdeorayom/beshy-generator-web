import { useRef, useState } from 'react';
import { useInter } from '@/utils/fonts';
import styles from '@/styles/Home.module.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const BeshyGenerator = () => {

    const inputRef = useRef();

    const [replacedText, setReplacedText] = useState('')
    const [isCopied, setIsCopied] = useState(false)

    const beshyGenerate = (input) => {

        setIsCopied(false)

        let regex = / /g;
        let beshy = input.replace(regex, " 🤸‍♀️ ")

        setReplacedText(beshy)

    }

    const resetBeshyGenerator = () => {
        inputRef.current.value = "";
        setIsCopied(false)
        setReplacedText('')
    }

    const copyToClipboard = () => {
        setIsCopied(true)
    }

    return (
        <section>

            <textarea
                ref={inputRef}
                className={`${useInter.className} ${styles.input}`}
                placeholder='Dito ka mag type beshy ko 🤸‍♀️'
                aria-multiline
                rows={3}
                onChange={(input) => beshyGenerate(input.target.value)}
            />

            <label>Result:</label>
            <textarea
                className={`${useInter.className} ${styles.result}`}
                aria-multiline
                rows={7}
                placeholder='Dito 🤸‍♀️ mo 🤸‍♀️ makikita 🤸‍♀️ result 🤸‍♀️ beshy 🤸‍♀️ ko'
                value={replacedText}
                disabled
            />

            {
                isCopied ?
                    <div className={styles.alertWrapper}>
                        {
                            replacedText.length !== 0 ?
                                <label className={styles.success}>Copied!</label> :
                                <label className={styles.error}>Type something!</label>
                        }
                    </div> :
                    null
            }

            <div className={styles.buttonContainer}>
                <CopyToClipboard text={replacedText} onCopy={copyToClipboard}>
                    <button className={`${useInter.className} ${styles.clipboardButton}`}
                    >
                        Copy result to clipboard beshy ko 🤸‍♀️
                    </button>
                </CopyToClipboard>
            </div>

            <div className={styles.buttonContainer}>
                <button
                    onClick={resetBeshyGenerator}
                    className={`${useInter.className} ${styles.resetButton}`}
                >
                    Reset the text beshy
                </button>
            </div>

        </section>
    )
}

export default BeshyGenerator