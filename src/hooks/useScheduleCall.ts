import { useState } from 'react'

interface ScheduleCallData {
  title: string
  description?: string
  startTime: string
  endTime: string
  attendeeEmail?: string
}

export const useScheduleCall = () => {
  const [isLoading, setIsLoading] = useState(false)

  const scheduleCall = async (data: ScheduleCallData) => {
    setIsLoading(true)

    try {
      const startDate = new Date(data.startTime)
      const endDate = new Date(data.endTime)

      const googleCalendarUrl = new URL('https://calendar.google.com/calendar/render')
      googleCalendarUrl.searchParams.set('action', 'TEMPLATE')
      googleCalendarUrl.searchParams.set('text', data.title)
      googleCalendarUrl.searchParams.set('dates',
        `${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z`
      )

      if (data.description) {
        googleCalendarUrl.searchParams.set('details', data.description)
      }

      if (data.attendeeEmail) {
        googleCalendarUrl.searchParams.set('add', data.attendeeEmail)
      }

      window.open(googleCalendarUrl.toString(), '_blank')
      return { success: true }
    } catch (error) {
      console.error('Error scheduling call:', error)
      return { success: false, error: 'Failed to schedule call' }
    } finally {
      setIsLoading(false)
    }
  }

  return { scheduleCall, isLoading }
}
