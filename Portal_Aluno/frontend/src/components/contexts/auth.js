import React, {
  createContext,
  useState,
  useContext,
  FunctionComponent,
  ReactChild,
} from "react";

import api from "services/api";
import { authenticate } from "services/auth";
import { format } from "date-fns";

import { getDisciplineTeacher } from "services/teacher";

const anonymusFunction = () => {};

interface AuthProps {
  children: ReactChild;
}

const emptyUser = {
  id: "",
  firstname: "",
  lastname: "",
  email: "",
  cpf: 0,
  usertype: "",
  avatar: "",
  disciplines: [],
};

const emptyDiscipline = {
  id: "",
  name: "",
  turno: "",
  numberStudents: 0,
};

const emptyContext = {
  user: emptyUser,
  signed: false,
  loading: true,
  setLoading: anonymusFunction,
  signIn: anonymusFunction,
  signOut: anonymusFunction,
  setTokenChancePassword: anonymusFunction,
};
const AuthContext = createContext(emptyContext);

export const AuthProvider: FunctionComponent<AuthProps> = ({ children }) => {
  const [user, setUser] = useState(emptyUser);
  const [disciplines, setDisciplines] = useState([emptyDiscipline]);
  const [token, setToken] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [signed, setSigned] = useState(false);
  const [tokenChancePassword, setTokenChancePassword] = useState("");

  async function signIn(email, password): Promise<Boolean> {
    try {
      setLoading(true);

      const response = await authenticate(email, password);

      if (response.user && response.token) {
        api.defaults.headers.common.Authorization = `Bearer ${response.token}`;
        sessionStorage.setItem("token", response.token);

        setUser(response.user);
        setToken(response.token);
        if (response.user.usertype === "Professor") {
          const resp = await getDisciplineTeacher(
            response.user._id,
            response.user.usertype
          );

          setDisciplines(resp.discipline);
        }
        setSigned(true);
        setLoading(false);
        return true;
      } else {
        setLoading(false);
        return false;
      }
    } catch (error) {
      setLoading(false);
      setMessage("Email ou senha incorreto");
      return false;
    }
  }

  function signOut() {
    setSigned(false);
    setUser(emptyUser);
    setToken("");
  }

  const excelCabecalho = [
    {
      dateNow: format(new Date(), "dd/MM/yyyy"),
      user: `${user.firstname} ${user.lastname}`,
    },
  ];

  const DataSet = [
    {
      columns: [
        {
          title: "Data de Download",
        },
        {
          title: "Professor(a)",
        },
      ],
      data: excelCabecalho.map((item) => [
        {
          value: item.dateNow || "",
        },
        {
          value: item.user || "",
        },
      ]),
    },
    {
      ySteps: 2,
      columns: [
        {
          column: "name",
          title: "Disciplina",
          align: "center",
        },
        { column: "turno", title: "Turno", align: "center" },
        {
          column: "numberStudents",
          title: "Numero de alunos",
          align: "center",
        },
      ],
      data: disciplines.map((item) => [
        {
          value: item.name ? item.name : "",
        },
        {
          value: item.turno ? item.turno : "",
        },
        {
          value: item.numberStudents ? item.numberStudents : "",
        },
      ]),
    },
  ];

  return (
    <AuthContext.Provider
      value={{
        token,
        signed,
        DataSet,
        user,
        signIn,

        signOut,
        loading,
        setLoading,
        tokenChancePassword,
        setTokenChancePassword,
        message,
        disciplines,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  const {
    token,
    signed,
    user,
    DataSet,
    signIn,
    signOut,
    loading,
    setLoading,
    tokenChancePassword,
    setTokenChancePassword,
    message,
    disciplines,
  } = context;
  return {
    token,
    signed,
    user,
    DataSet,
    signIn,
    signOut,
    loading,
    setLoading,
    tokenChancePassword,
    setTokenChancePassword,
    message,
    disciplines,
  };
}
