import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { scrollIndex } from "../../redux/actions"

const RestoreData = () => {
  const [position, setPosition] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(scrollIndex(position))
  }, [position])

  const handleScroll = () => {
    const index = window.pageYOffset
    setPosition(index)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
}
export default RestoreData
