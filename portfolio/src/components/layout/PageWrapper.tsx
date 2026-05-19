import Navbar from './Navbar'

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div id="snap-container">
        {children}
      </div>
    </>
  )
}