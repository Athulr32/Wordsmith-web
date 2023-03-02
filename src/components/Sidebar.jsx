import Link from 'next/link';

function Sidebar() {
  return (
    <div style={{width:"350px", backgroundColor:"white",height:"95vh",zIndex:1,position:"relative"}} class="shadow-xl">
        <ul class="p-20 ml-6"d>
        <li class="mb-7"><Link href="/dashboard/introduction">Introduction</Link></li>
            <li class="mb-7"><Link href="/dashboard/vocabulary">Vocabulary Building</Link></li>
            <li class="mb-7"><Link href="/dashboard/grammar">Grammar Correction</Link></li>
            <li class="mb-7"><Link href="/dashboard/translation">Translation</Link></li>
            <li class="mb-7"><Link href="/dashboard/dictionary">Dictionary</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar