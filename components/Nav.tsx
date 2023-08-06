import { getPages } from '@/sanity/lib/client'
import Navbar from '@/components/Navbar'

export default async function Nav(){
  const pages = await getPages();

    return(
        <>
          <Navbar pages={pages} />
        </>
    )
}