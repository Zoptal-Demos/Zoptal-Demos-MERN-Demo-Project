import React from 'react'
import bath from '../img/bath.png'
import bed from '../img/bed.png'
import area from '../img/area.png'

export default function Property_list(props) {
    return (
        <>
            <div className="property_list_main" data-aos="fade-up">
                <div className="imagetop">
                    <img src={props.data.attachments[0]} alt="property image" className='img-fluid w-100' />
                </div>
                <div className="d-flex name_details justify-content-between mt-2">
                    <div className="name">{props.data.title}</div>
                    <div className="price">${props.data.price}</div>
                </div>
                <div className="address mt-2">
                    <span className='me-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                        <path d="M14.2515 18.992H0.950103C0.69812 18.992 0.456458 18.8919 0.278279 18.7137C0.1001 18.5355 0 18.2939 0 18.0419C0 17.7899 0.1001 17.5483 0.278279 17.3701C0.456458 17.1919 0.69812 17.0918 0.950103 17.0918H14.2515C14.5035 17.0918 14.7452 17.1919 14.9234 17.3701C15.1015 17.5483 15.2016 17.7899 15.2016 18.0419C15.2016 18.2939 15.1015 18.5355 14.9234 18.7137C14.7452 18.8919 14.5035 18.992 14.2515 18.992Z" fill="#1384F7" />
                        <path d="M7.6008 15.1919C7.47601 15.1921 7.35243 15.1675 7.23715 15.1198C7.12188 15.072 7.01718 15.0019 6.92907 14.9135L3.03585 11.0204C2.13304 10.1175 1.51823 8.96724 1.26916 7.71497C1.0201 6.46271 1.14796 5.16471 1.63658 3.98511C2.1252 2.80551 2.95264 1.79729 4.01426 1.08795C5.07588 0.378609 6.324 0 7.6008 0C8.87759 0 10.1257 0.378609 11.1873 1.08795C12.249 1.79729 13.0764 2.80551 13.565 3.98511C14.0536 5.16471 14.1815 6.46271 13.9324 7.71497C13.6834 8.96724 13.0686 10.1175 12.1657 11.0204L8.27252 14.9135C8.18442 15.0019 8.07972 15.072 7.96444 15.1198C7.84916 15.1675 7.72558 15.1921 7.6008 15.1919Z" fill="#1384F7" />
                        <path d="M7.60077 8.3551C8.65022 8.3551 9.50097 7.50435 9.50097 6.45489C9.50097 5.40544 8.65022 4.55469 7.60077 4.55469C6.55131 4.55469 5.70056 5.40544 5.70056 6.45489C5.70056 7.50435 6.55131 8.3551 7.60077 8.3551Z" fill="white" />
                    </svg></span>{props.data.address}
                </div>
                <ul className="services_list mt-3">
                    <li>
                        <span>
                            <img src={bath} alt="Bathroom" />
                        </span>
                        {props.data.no_of_bathrooms} Bth
                    </li>
                    <li>
                        <span>
                            <img src={bed} alt="Bedroom" />
                        </span>
                        {props.data.no_of_bedrooms} Bd
                    </li>
                    <li>
                        <span>
                            <img src={area} alt="Area" />
                        </span>
                        {props.data.area_sqft} Sqft
                    </li>
                </ul>
            </div>
        </>
    )
}
