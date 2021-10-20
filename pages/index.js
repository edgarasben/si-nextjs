import { useState, useEffect } from 'react'
import { supabase } from '../lib/initSupabase'

export default function Index() {
  /* Example: Fetch on the client side
  
  const [items, setItems] = useState([])

  useEffect(() => {
    fetchItems()
  }, [])

  // Example fetch function
  async function fetchJobs() {
    let { data: jobs, error } = await supabase.from('jobs').select('id, title')
    if (error) console.log('error', error)
    else setJobs(jobs)
  }

  return (
    <div>
      <ul>
        <li>
          {jobs.map((job) => (
            <div key={job.id}>{job.title}</div>
          ))}
        </li>
      </ul>
    </div>
  )
}
*/

  return 'Hello world!'
}
