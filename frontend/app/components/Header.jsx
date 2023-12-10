import Image from "next/image"

const Header = () => {
  return (
    <header>
      <div className="title">
        <Image src="/functions.png" alt="Chainlink Functions Logo" width={80} height={45} priority />
        Chainlink Functions Next Starter
      </div>
    </header>
  )
}

export default Header
