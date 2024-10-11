export const loginService = async (email: string, password: string) => {
    const response = await fetch("http://localhost:8080/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  
    return response; // Devuelve la respuesta
  };

  export const registerService = async (nombre: string, email: string, password: string) => {
    const response = await fetch("http://localhost:8080/api/v1/auth/register",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({nombre, email, password}),
    });

    if (!response.ok){
        const errorData = await response.json();
        throw new Error(errorData.message || "Error en el registro");
    }

    return await response;
  }