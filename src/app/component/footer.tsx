 export default function Footer(){
    return (
        <footer className="bg-[#071402] py-4  sm:mt-12 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 text-center text-light-text dark:text-light-text">
          <p className="text-sm underline underline-offset-3 decoration-[#125607]">© {new Date().getFullYear()} Todo Application. All rights reserved.</p>
        </div>
      </footer>
    )
}