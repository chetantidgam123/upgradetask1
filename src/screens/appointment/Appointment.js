import React from 'react'
import { logData } from '../../util/fetch'

const Appointment = () => {
    const loggdata = logData();
  return (
      <div>
        {/*if login  */}
        {
            loggdata && <div>
                list
            </div>
        }
        {
            !loggdata && <div>
                please login first
            </div>
        }

    </div>
  )
}

export default Appointment