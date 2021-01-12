import React from 'react'
import { Link } from "react-router-dom";
import './Car.css'

function Health() {
    return (<div className="car">
    <div class="logo_option">
                <Link to="/car">
                <div class="logo1" style={{opacity:0.5}}>
                    <img className="logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDU2OS4wNjggNTY5LjA2OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBkPSJNNTYwLjE0OSwzNDYuOTI4di03NS44NTRjMC0xNi42ODctNy44ODgtNDEuMDI4LTQ0LjI4OC02NC4zODVjMCwwLTQ4LjA3LTEwNC43MjQtMTMzLjYxNi0xMDQuNzI0aC0xOTUuNDEgICBjLTg1LjU0NCwwLTEzMy42MTgsMTA0LjcyNC0xMzMuNjE4LDEwNC43MjRjLTM2LjQwMywyMy4zNTctNDQuMjg5LDQ3LjY5OC00NC4yODksNjQuMzg1djc1Ljg1NEMzLjk1NywzNDcuMiwwLDM1MS4zMTUsMCwzNTYuMzU4ICAgdjQ4LjI3N2MwLDQuMTI3LDIuNjY4LDcuNTIzLDYuMzQ2LDguODEydjQ0LjIwMmMwLDUuMjIsNC4yMjQsOS40NTQsOS40NDksOS40NTRoNjUuMDc5YzUuMjI0LDAsOS40NDYtNC4yMzQsOS40NDYtOS40NTR2LTQzLjc1OSAgIGMyNi43NTMtOC44NCw1My42OTktMTUuMjM1LDgwLjI0OS0xOS42NGgyMjcuOTUxYzI2LjU0Nyw0LjQwNCw1My40NzksMTAuOCw4MC4yNDcsMTkuNjR2NDMuNzU5YzAsNS4yMiw0LjIxMyw5LjQ1NCw5LjQzOCw5LjQ1NCAgIGg2NS4wODVjNS4yMTUsMCw5LjQ0LTQuMjM0LDkuNDQtOS40NTR2LTQ0LjIwMmMzLjY3OC0xLjI4OCw2LjMzOC00LjY5Miw2LjMzOC04LjgxMnYtNDguMjc3ICAgQzU2OS4wNjgsMzUxLjMxNSw1NjUuMTEzLDM0Ny4yLDU2MC4xNDksMzQ2LjkyOHogTTE0Mi4zNDEsMzUxLjIxMUg3Mi40MThjLTEwLjUzOSwwLTE5LjEyMy04LjU4NS0xOS4xMjMtMTkuMTA5di0xOS4xMiAgIGMwLTEwLjUzOCw4LjU4Ni0xOS4xMTgsMTkuMTIzLTE5LjExOGMxLjEwNSwwLDIuMjA1LDAuMTg4LDMuMjQ0LDAuNTczbDc5LjQ4MiwyOC42OGMzLjgwMSwxLjM3Miw2LjMxLDQuOTYxLDYuMzEsOC45OTUgICBDMTYxLjQ1NCwzNDIuNjI2LDE1Mi44ODEsMzUxLjIxMSwxNDIuMzQxLDM1MS4yMTF6IE0zNTAuMDA3LDM0Ni4xOGMwLDQuMDQ4LTMuMjgxLDcuMzI0LTcuMzI0LDcuMzI0SDIyNi40MDYgICBjLTQuMDUyLDAtNy4zMjQtMy4yNzYtNy4zMjQtNy4zMjR2LTE3LjA5M2MwLTQuMDUsMy4yNzQtNy4zMjQsNy4zMjQtNy4zMjRoMTE2LjI3N2M0LjA1NiwwLDcuMzI0LDMuMjc0LDcuMzI0LDcuMzI0VjM0Ni4xOHogICAgTTEwMi45NjYsMjA4Ljg1OGMxOS4wNzItMzMuMjUxLDUxLjg2MS03NS43NjQsOTQuODQ3LTc1Ljc2NGgxNzMuNDM1YzQyLjk4NCwwLDc1Ljc4OCw0Mi41MTMsOTQuODU0LDc1Ljc2NEgxMDIuOTY2eiAgICBNNTE1Ljc4NSwzMzIuMDgzYzAsMTAuNTQzLTguNTgzLDE5LjEyNi0xOS4xMjYsMTkuMTI2aC02OS45MjJjLTEwLjU0NSwwLTE5LjEyMy04LjU4My0xOS4xMjMtMTkuMTI2ICAgYzAtNC4wMzUsMi41MzEtNy42MjUsNi4zMjEtOS4wMDZsNzkuNDc3LTI4LjY3MWMxLjA2LTAuMzg3LDIuMTMzLTAuNTczLDMuMjQ3LTAuNTczYzEwLjU0NiwwLDE5LjEyNiw4LjU4MiwxOS4xMjYsMTkuMTE4VjMzMi4wODN6ICAgIiBmaWxsPSIjNWUyN2M5IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />
                    
                    <p>Car & Taxi</p>
                    </div>
                </Link>

                <Link to="/bike">
                <div class="logo2" style={{opacity:0.5}}>
                    <img className="logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDU4MS40IDU4MS40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnIGlkPSJMYXllcl8xXzExN18iPgoJCTxnPgoJCQk8cGF0aCBkPSJNMjg5LjQyNSwzNzYuMTI1Yy0yOC4wNSwwLTUxLDIyLjk1LTUxLDUxVjUzMC40YzAsMjguMDUsMjIuOTUsNTEsNTEsNTFzNTEtMjIuOTUsNTEtNTFWNDI3LjEyNSAgICAgQzM0MC40MjUsMzk5LjA3NSwzMTcuNDc2LDM3Ni4xMjUsMjg5LjQyNSwzNzYuMTI1eiIgZmlsbD0iIzVlMjdjOSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNNDc0LjMsNjMuNzVoLTk4LjE3NUMzNjQuNjUsMjYuNzc1LDMzMC4yMjYsMCwyODkuNDI1LDBzLTc1LjIyNSwyNi43NzUtODYuNyw2My43NWgtOTYuOSAgICAgYy0xNC4wMjUsMC0yNS41LDExLjQ3NS0yNS41LDI1LjVzMTEuNDc1LDI1LjUsMjUuNSwyNS41SDIwNGwwLDBjNi4zNzUsMjEuNjc1LDIwLjQsMzkuNTI1LDM5LjUyNSw1MSAgICAgYy02OC44NSwyMC40LTExOS44NSw4NC4xNS0xMTkuODUsMTU5LjM3NVY0NTljMCwyMi45NSwxOS4xMjUsNDIuMDc1LDQyLjA3NSw0Mi4wNzVoMzQuNDI1VjQyOC40ICAgICBjMC00OS43MjYsNDAuOC05MC41MjUsOTAuNTI1LTkwLjUyNWM0OS43MjUsMCw5MC41MjUsNDAuOCw5MC41MjUsOTAuNTI1djcyLjY3NWgzNC40MjVjMjIuOTUsMCw0Mi4wNzUtMTkuMTI1LDQyLjA3NS00Mi4wNzUgICAgIFYzMjYuNGMwLTc1LjIyNi01MS0xNDAuMjUtMTE5Ljg1MS0xNTkuMzc1YzE5LjEyNS0xMS40NzUsMzMuMTUtMjkuMzI1LDM5LjUyNS01MWwwLDBoOTguMTc1YzE0LjAyNSwwLDI1LjUtMTEuNDc1LDI1LjUtMjUuNSAgICAgQzQ5OS44LDc1LjIyNSw0ODguMzI1LDYzLjc1LDQ3NC4zLDYzLjc1eiBNMjg5LjQyNSwxNDEuNTI1Yy0yOC4wNSwwLTUxLTIyLjk1LTUxLTUxYzAtMjguMDUsMjIuOTUtNTEsNTEtNTFzNTEsMjIuOTUsNTEsNTEgICAgIEMzNDEuNywxMTguNTc1LDMxOC43NSwxNDEuNTI1LDI4OS40MjUsMTQxLjUyNXoiIGZpbGw9IiM1ZTI3YzkiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8L2c+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />

                    <p>Bike</p>
                </div>
                </Link>
                       
                <Link to="/health">
                <div class="logo3">
                <img className="logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTQwNyAyNDBjLTU3Ljg5MDYyNSAwLTEwNSA0Ny4xMDkzNzUtMTA1IDEwNXM0Ny4xMDkzNzUgMTA1IDEwNSAxMDUgMTA1LTQ3LjEwOTM3NSAxMDUtMTA1LTQ3LjEwOTM3NS0xMDUtMTA1LTEwNXptLTE1IDE1Ni4yMTA5MzgtNDAuNjA1NDY5LTQwLjYwNTQ2OSAyMS4yMTA5MzgtMjEuMjEwOTM4IDE5LjM5NDUzMSAxOS4zOTQ1MzEgNDkuMzk0NTMxLTQ5LjM5NDUzMSAyMS4yMTA5MzggMjEuMjEwOTM4em0wIDAiIGZpbGw9IiM1ZTI3YzkiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im00MDcgMjEwYzE3LjYyODkwNiAwIDM0LjM3NSAzLjYyMTA5NCA0OS44MjgxMjUgOS43OTI5NjkgMTUuOTQ5MjE5LTI2LjAyMzQzOCAyNS4xNzE4NzUtNTIuOTUzMTI1IDI1LjE3MTg3NS04Mi42Njc5NjkgMC03OC4xNzk2ODgtNTQuODEyNS0xMzcuMTI1LTEyNy41LTEzNy4xMjUtNTYuNSAwLTk0LjAzMTI1IDM4LjUzOTA2Mi0xMTMuNSA3My44NDM3NS0xOS40Njg3NS0zNS4zMDQ2ODgtNTYtNzMuODQzNzUtMTEyLjUtNzMuODQzNzUtNzIuNjg3NSAwLTEyOC41IDU4Ljk0NTMxMi0xMjguNSAxMzcuMTI1IDAgMTAxLjE0MDYyNSAxMDEuNDE3OTY5IDE2Ni43MzgyODEgMjMxLjE3MTg3NSAyNzkuMjE0ODQ0bDkuODI4MTI1IDguNTA3ODEyIDkuODI4MTI1LTguNTA3ODEyYzkuODIwMzEzLTguNTA3ODEzIDIwLjQ0MTQwNi0xNi42OTkyMTkgMjkuOTU3MDMxLTI0Ljc1MzkwNi01LjQwMjM0NC0xNC41ODIwMzItOC43ODUxNTYtMzAuMTQ4NDM4LTguNzg1MTU2LTQ2LjU4NTkzOCAwLTc0LjQ0MTQwNiA2MC41NTg1OTQtMTM1IDEzNS0xMzV6bTAgMCIgZmlsbD0iIzVlMjdjOSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=" />
                    <p>Health</p>
                </div> 
                </Link>
                   
            </div>
    <div class="car_info">
        <span className="car_info_span">Enter your car number</span>
        <div class="car_info_details">
            <input className="car_info_input" type="text" placeholder="Enter your car number e.g MH01A1234" />
            <button className="car_info_submit" type="submit">Insure Now</button>

        </div>
    </div>


        <br />
        <br />
        <br />


    
</div>

    )
}

export default Health
