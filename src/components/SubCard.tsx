const SubCard = ({data, onRemove, editSub}:{data, onRemove: (id:number) => void, editSub: (id:number) => void}) => {
    return (
        <>
            <div className="col">
            <div className="card shadow-sm">
                <div className="card-body">
                    <p className="card-text">{data.content}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button onClick={()=> editSub(data.id)} type="button" className="btn btn-sm btn-outline-secondary">Edit
                            </button>
                            <button onClick={()=> onRemove(data.id)} type="button" className="btn btn-sm btn-outline-secondary">Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
export default SubCard;