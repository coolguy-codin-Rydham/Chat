
const AppLayout = ()=> WrappedComponent => {
    // eslint-disable-next-line react/display-name
    return (props) => {
        return (
            <div>
                <div>Header</div>
                <WrappedComponent {...props} />
                <div>Footer</div>
            </div>
        );
    };
};

export default AppLayout;
