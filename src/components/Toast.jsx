/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/styles/Toast.css'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

export default function Toast({ status, setStatus }) {
  const { t } = useTranslation()

  return (
    <article id={status ? 'true' : 'false'}>
      <div>
        <h1>{status ? t('success') : t('fail')}</h1>

        <FontAwesomeIcon
          icon={faXmark}
          id="x-mark"
          onClick={() => setStatus(null)}
        />
      </div>

      <p>{status ? t('message-sent') : t('message-not-sent')}</p>
    </article>
  )
}
