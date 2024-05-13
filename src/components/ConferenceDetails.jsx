import { useParams } from "react-router-dom";
import useAxios from "../service/useAxios";
const ConferenceDetails = () => {
  const { id } = useParams();
  const { data, loading } = useAxios(
    `https://6634d6199bb0df2359a2e7ca.mockapi.io/conference/conference/${id}`
  );
  return (
    <div className="mt-16 card">
      <div className="card-body">
        <div className="row">
          <div className="mb-3 col-lg-3" style={{ maxWidth: "20rem" }}>
            <img
              src="images/Conference2.jpg"
              className="img-thumbnail"
              alt="Conference Image"
            />
          </div>

          <div className="col-lg-9 mb-9">
            <h4 className="card-title">
              <span className="badge bg-success">
                “O‘zbekistonda ilm-fanning rivojlanish istiqbollari” mavzusidagi
                xalqaro ilmiy-amaliy anjumani {id}
              </span>
            </h4>
            <p className="card-text">
              Tashkilotchilar:{" "}
              <b>
                Fan va innovatsiyalar akademiyasi, “Science and Innovation”
                xalqaro ilmiy jurnali, “O’zbekistonning taniqli olimlari”
                ensiklopediyasi jamoasi, Plagiarism.uz – ilmiy ishlarni
                antiplagiatga tekshirish platformasi{" "}
              </b>
              <br />
              Anjuman o‘tkazilish vaqti: <b>2022/11/30 </b> <br />
              Anjuman o‘tkazilish joyi: <b>ZOOM platformasi</b>
              <br />
              <br />
              Anjuman haqidagi ma’lumotlar va ishtirokchilarning sertifikatlari
              quyidagi telegram kanalda e’lon qilib boriladi: <br />
              <a
                href="https://t.me/ilmiy_konferensiya"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://t.me/ilmiy_konferensiya
              </a>
            </p>
            <a
              href="files/Axborot_xati_24-25.04.2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-success"
            >
              <i className="bi bi-arrow-down-circle"></i> Axborot xati
            </a>
            <a
              href="co_articles.php?series=24"
              className="btn btn-outline-info"
              style={{ marginLeft: "1px" }}
            >
              <i className="bi bi-eye"></i> Maqolalar
            </a>
            <a
              href="https://www.youtube.com/watch?v=pEfL8S4bb8M"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary"
              style={{ marginLeft: "1px" }}
            >
              <i className="bi bi-camera-video"></i> Video
            </a>
            <a
              href="files/speakers/20240424_CO24.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-success"
            >
              <i className="bi bi-arrow-down-circle"></i> SPEAKERS
            </a>
            <br />
            <br />
            <a
              href="files/dastur/20240424_CO24.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-warning"
            >
              <i className="bi bi-arrow-down-circle"></i> Konferensiya dasturi
            </a>
            <a
              href="files/dastur/20240424_CO24_ru.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-warning"
            >
              <i className="bi bi-arrow-down-circle"></i> Программа конференции
            </a>
            <a
              href="files/dastur/20240424_CO24_en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-warning"
            >
              <i className="bi bi-arrow-down-circle"></i> Conference program
            </a>
            <br />
            <br />
            <p>
              <a
                href="https://scientists.uz/uploads/journal/20240424_CO24_1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <i className="bi bi-arrow-down-circle"></i> Materiallar to'plami
                1-qism / Сборник материалов часть 1 / Collection of materials
                part 1
              </a>
            </p>
            <a
              href="https://scientists.uz/uploads/journal/20240424_CO24_2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="bi bi-arrow-down-circle"></i> Materiallar to'plami
              2-qism / Сборник материалов часть 2 / Collection of materials part
              2
            </a>
            <br />
            <br />
            <a
              href="https://drive.google.com/drive/folders/1XWN53CzTTkIB33WkmEiA1wX2uevU_wi5?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-success"
            >
              <i className="bi bi-arrow-down-circle"></i> Taqdimotlar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceDetails;
