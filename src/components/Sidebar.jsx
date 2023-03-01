import Link from 'next/link';

function Sidebar() {
  return (
    <div style={{width:"350px", backgroundColor:"white",height:"95vh",zIndex:1}} class="shadow-xl">
        <ul class="p-20 ml-6"d>
            <li class="mb-7"><Link href="/dashboard/vocabulary">Vocabulary Building</Link></li>
            <li class="mb-7">Grammar Correction</li>
            <li class="mb-7">Translation</li>
            <li class="mb-7">Dictionary</li>
        </ul>
    </div>
  )
}

export default Sidebar