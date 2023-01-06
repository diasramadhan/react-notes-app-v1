import './NavigationBar.css';

function NavigationBar({ setContent }) {
  return (
    <div className="container-navbar">
      <button className="btn-aktif" onClick={(e) => setContent('aktif')}>
        Catatan Aktif
      </button>
      <button className="btn-arsip" onClick={(e) => setContent('arsip')}>
        Catatan Arsip
      </button>
    </div>
  );
}

export default NavigationBar;
