import React, { useEffect, useRef, useState } from "react";
import { useProfileContext } from "../../../../Context/ProfileTemplateContext";
import { allSocialsIcons } from "../Data/AllSocialLInkData";

const SocialLinkSelection = ({ onClose, selectedIcon, setSelectedIcon }) => {
    const { setSocialLinks, socialLinks } = useProfileContext();

    const handleClosing = () => {
        onClose();
        setSelectedIcon(socialLinks);
    };

    const handleAddingLink = () => {
        onClose();
        setSocialLinks((prev) => {
            return [...selectedIcon];
        });
    };

    return (
        <div className="social_link_selection">
            <div className="social_link_selection_card">
                <div className="selection_card__title">
                    <h3>Select Your Card</h3>
                </div>

                <div className="selection_card__icons-container">
                    {allSocialsIcons?.map((icon, index) => {
                        return <IconCard selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} key={index} icon={icon} index={index} />;
                    })}
                </div>

                <div className="selection_card__confirm-button">
                    <button onClick={handleClosing} className=" me-2 border-0 py-2 px-4 text-light rounded-pill bg-primary-400">
                        Cancel
                    </button>
                    <button onClick={handleAddingLink} className=" border-0 py-2 px-4 text-light rounded-pill bg-primary-400">
                        Ok
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLinkSelection;

const IconCard = ({ icon, index, selectedIcon, setSelectedIcon }) => {
    const [isSelected, setIsSelected] = useState(false);
    const inputRef = useRef();

    const handleSelection = () => {
        const inputCheckbox = inputRef && inputRef.current;
        setIsSelected(inputCheckbox.checked);
    };
    useEffect(() => {
        if (isSelected && !selectedIcon?.includes(icon)) {
            setSelectedIcon([...selectedIcon, icon]);
        } else if (!isSelected) {
            setSelectedIcon([...selectedIcon.filter((item) => item.id !== icon.id)]);
        }
    }, [isSelected]);

    useEffect(() => {
        if (selectedIcon.includes(icon)) {
            setIsSelected(true);
            inputRef.current.checked = true;
        }
    }, []);

    return (
        <>
            <div className="icon-card">
                <label htmlFor={`icon${index}`} className={`icon-card-wrapper ${isSelected ? "active" : ""}`}>
                    <div className="card__text">{icon.name}</div>
                    <div className="card__icon">{icon?.icon}</div>
                    <div className="card__checkMark">
                        <input type="checkbox" onChange={handleSelection} ref={inputRef} name="" id={`icon${index}`} />
                    </div>
                </label>
            </div>
        </>
    );
};
