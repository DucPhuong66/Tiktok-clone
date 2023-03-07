import Header from '~/components/Layout/Components/Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div class="container">
                <div class="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
