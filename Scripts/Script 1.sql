
--CREATE DATABASE CesarVallejo

GO

USE CesarVallejo

GO

CREATE TABLE Personal
(
	IdPersonal	INT IDENTITY(1,1),
	ApPaterno	VARCHAR(50),
	ApMaterno	VARCHAR(50),
	Nombre1		VARCHAR(50),
	Nombre2		VARCHAR(50),
	NombreCompleto AS Nombre1 + ' ' + Nombre2 + ' ' + ApPaterno + ' ' + ApMaterno,
	FhcNac		DATE,
	FhcIngreso	DATE,
	CONSTRAINT [XPKPersonal] PRIMARY KEY CLUSTERED (IdPersonal ASC)
)

GO

CREATE TABLE Hijos
(
	IdDerHab	INT IDENTITY(1,1),
	IdPersonal	INT,
	ApPaterno	VARCHAR(50),
	ApMaterno	VARCHAR(50),
	Nombre1		VARCHAR(50),
	Nombre2		VARCHAR(50),
	NombreCompleto AS Nombre1 + ' ' + Nombre2 + ' ' + ApPaterno + ' ' + ApMaterno,
	FhcNac		DATE,
	CONSTRAINT [XPKHijos] PRIMARY KEY CLUSTERED (IdDerHab ASC)
)

GO


ALTER TABLE [dbo].[Hijos] WITH CHECK ADD CONSTRAINT [FK_Hijos_Personal] FOREIGN KEY([IdPersonal])
REFERENCES [dbo].[Personal](IdPersonal)

GO

ALTER TABLE [dbo].[Hijos] CHECK CONSTRAINT [FK_Hijos_Personal]

