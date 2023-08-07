import { getPages } from '@/sanity/lib/client'
import Navbar from '@/components/Navbar'
import MobileNav from '@/components/MobileNav'

export default async function Nav(){
  const pages = await getPages();

    return(
        <>
          <Navbar pages={pages} />
          <MobileNav pages={pages} />
        </>
    )
}