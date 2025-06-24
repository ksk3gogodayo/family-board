'use client'

import { useState } from 'react'
import { postMessage } from '@/firebase/postMessage'
import { auth } from '@/firebase/config'

export default function BoardPage() {
  const [text, setText] = useState('')

  const handlePost = async () => {
    const user = auth.currentUser
    if (!user) return
    if (!text.trim()) return
    await postMessage(text, user.uid)
    setText('')
  }

  return (
    <div>
      <h1>Boardページです！</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handlePost}>投稿</button>
    </div>
  )
}