
import { format } from "date-fns";
import ejs from "ejs";
import pdf from "html-pdf";
import path from "path";
import puppeteer from "puppeteer";

import Discipline from "../app/models/discipline";
import User from "../app/models/user";

class PdfDisciplines {
  async generatePdf(req, res) {
    const { id } = req.params;

    const date = format(new Date(), "dd/MM/yyyy");

    const users = await User.find({ _id: id }).select([
      "firstname",
      "lastname",
    ]);

    const fullname = `${users[0].firstname} ${users[0].lastname}`;

    const discipline = await Discipline.find({ user: id }).select([
      "name",
      "numberStudents",
      "turno",
    ]);

    const filePath = path.join(__dirname, "print.ejs");

    ejs.renderFile(
      filePath,
      { passengers: discipline, name: fullname, date },
      async (err, html) => {
        if (err) {
          return res.send("Erro na leitura do arquivo");
        }

        return res.send(html);
      }
    );
  }

  async downloadPdf(req, res) {
    const { id } = req.params;
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto(`${process.env.APP_URL}/pdf/${id}`, {
      waitUntil: "networkidle0",
    });

    const pdf = await page.pdf({
      printBackground: true,
      format: "Letter",
    });

    await browser.close();

    res.contentType("application/pdf");

    return res.send(pdf);
  }
}

export default new PdfDisciplines();
