import { ChildrenComponent } from "./ChildrenComponent";

export const FatherComponent = () => {
    return (
        <>
            <div className="d-flex  justify-content-center">
                <h1 className="text-white me-2">Father Component</h1>
                <ChildrenComponent btnText={'ChildrenButton'}/>                
            </div>
            <hr className="border border-white"/>
        </>
    );
};
