"use client"
const { createContext, useState, useCallback, useContext } = require("react");


const ModalContext = createContext(null);




// just in testing not in used
export function ModalProvider({children}){
    const [modal, setMoal] = useState(null)
    const showModal = useCallback(({title="Are you sure?",message="",confirmText="OK",cancelText="Cancel"}={})=>{
        return new Promise((resolve)=>{
            setMoal({title,message,confirmText,cancelText,resolve});
        });
    },[]);

    const handleConfirm = ()=>{
        if(!modal)return;
        modal.resolve(true);
        setMoal(null)
    }

    const handleCancel = ()=>{
        if(!modal)return;
        modal.resolve(false);
        setMoal(null);
    }

    return(
        <ModalContext.Provider value={{showModal}}>{children}
        
         {modal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black/40" onClick={handleCancel}></div>
          <div className="relative z-10 max-w-sm w-full p-5 bg-white rounded-lg shadow-lg">
            <h3 className="font-semibold text-lg">{modal.title}</h3>
            <p className="mt-2 text-sm">{modal.message}</p>
            <div className="mt-4 flex justify-end gap-3">
              <button onClick={handleCancel} className="px-4 py-2 rounded bg-gray-200">
                {modal.cancelText}
              </button>
              <button onClick={handleConfirm} className="px-4 py-2 rounded bg-blue-600 text-white">
                {modal.confirmText}
              </button>
            </div>
          </div>
        </div>
      )}
        </ModalContext.Provider>
    )
}


export function useModal(){
    const ctx = useContext(ModalContext)
    if(!ctx) throw new Error("useModal must be used inside ModalProvider");
    return ctx;
}