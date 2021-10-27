import React from 'react'
import Navbar from "../navbar";
import Footer from "../Footer"

const ToolsPregnancycalculator = () => {
    return (
        <div>
            <Navbar />

            
            <div className="pregnant">
            <h1 >Pregnancy Calculator</h1>
            <form action="">
                <table>
                    <tr>
                        <td>
                            <pre>
                            Last Menstrual Period: <input type="text" name="menstrual" value="" size="10" maxlength="10" />
                                      
                            </pre>
                        </td>
                    </tr>
                </table>
            </form>
                
            </div>
          


            <Footer/>
        </div>
    )
}

export default ToolsPregnancycalculator
