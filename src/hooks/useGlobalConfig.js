import { getStatic } from "../api/firebase";

const useGlobalConfig = () => {
  (async () => {
    try {
      const _static = await getStatic()

      console.log('useGlobal', _static);
      if (_static) {
        localStorage.removeItem("persist:static")
        localStorage.setItem("persist:static", JSON.stringify(_static))
      }
    } catch (err) {
      console.warn(err)
    }
  })()
}

export default useGlobalConfig